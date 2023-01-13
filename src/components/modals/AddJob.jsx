import { useState } from "react";
import { FaList } from "react-icons/fa";
import { useMutation, useQuery } from "@apollo/client";
import { GET_JOBS } from "../../queries/jobsQueries";
import { GET_CLIENTS } from "../../queries/clientQueries";
import { ADD_JOB } from "../../mutations/JobMutation";




export default function AddJob() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [container, setContainer] = useState("");
  const [size, setSize] = useState("");
  const [weight, setWeight] = useState("");
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [receiver, setReceiver] = useState("");
  const [status, setStatus] = useState("new");
  const [clientId, setClientId] = useState("");
  const [empty_return, setEmpty_return] = useState("")

  const [addJob] = useMutation(ADD_JOB, {
    variables: {
      name,
      description,
      status,
      container,
      size,
      weight,
      origin,
      destination,
      receiver,
      empty_return,
      clientId,
    },
    update(cache, { data: { addJob } }) {
      const { jobs } = cache.readQuery({
        query: GET_JOBS,
      });
      cache.writeQuery({
        query: GET_JOBS,
        data: { jobs: jobs.concat([addJob]) },
      });
    },
  });

  //Get clients for select

  const { loading, error, data } = useQuery(GET_CLIENTS);

  const onSubmit = (e) => {
    e.preventDefault();
    addJob(
      name,
      description,
      status,
      container,
      size,
      weight,
      origin,
      destination,
      receiver,
      empty_return,
      clientId
    );
    setName("");
    setDescription("");
    setStatus("new");
    setSize("");
    setWeight("");
    setOrigin("");
    setContainer("");
    setDestination("");
    setReceiver("");
    setClientId("");
    setEmpty_return("");
  };

  if (loading) return null;
  if (error) return "Fetch Failed";

  return (
    <>
      {!loading && !error && (
        <>
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#addJobModal"
          >
            <div className="d-flex align-items-center">
              <FaList className="icon" />
              <div>New Job</div>
            </div>
          </button>

          <div
            className="modal fade"
            id="addJobModal"
            aria-labelledby="addJobModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="addJobModalLabel">
                    Add Job
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                  <form onSubmit={onSubmit}>
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Description</label>
                      <input
                        type="text"
                        className="form-control"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Container</label>
                      <input
                        type="text"
                        className="form-control"
                        id="container"
                        value={container}
                        onChange={(e) => setContainer(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Size</label>
                      <input
                        type="text"
                        className="form-control"
                        id="size"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Weight</label>
                      <input
                        type="text"
                        className="form-control"
                        id="weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Origin</label>
                      <input
                        type="text"
                        className="form-control"
                        id="origin"
                        value={origin}
                        onChange={(e) => setOrigin(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Destination</label>
                      <input
                        type="text"
                        className="form-control"
                        id="destination"
                        value={destination}
                        onChange={(e) => setDestination(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Receiver</label>
                      <input
                        type="text"
                        className="form-control"
                        id="receiver"
                        value={receiver}
                        onChange={(e) => setReceiver(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Empty_Return</label>
                      <input
                        type="text"
                        className="form-control"
                        id="empty_return"
                        value={empty_return}
                        onChange={(e) => setEmpty_return(e.target.value)}
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Status</label>
                      <select
                        id="status"
                        className="form-select"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <option value="new">Not Allocated</option>
                        <option value="allocated">
                          Allocated Waiting Pick-Up
                        </option>
                        <option value=" arrived_loading">
                          Arrived At Loading Site
                        </option>
                        <option value="gate_loading">
                          Gated In At Loading Site
                        </option>
                        <option value="loaded">Loaded Waiting release</option>
                        <option value="on_journey">On Route To Client</option>
                        <option value="arrival_at_destination">
                          Arrival At Offloading
                        </option>
                        <option value="offloading">Offloading</option>
                        <option value="offloaded_on_return_journey">
                          Empty Return Journey
                        </option>
                        <option value="completed">Completed</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Client</label>
                      <select
                        id="clientId"
                        className="form-select"
                        value={clientId}
                        onChange={(e) => setClientId(e.target.value)}
                      >
                        <options value="">Select Client</options>
                        {data.clients.map((client) => (
                          <option key={client.id} value={client.id}>
                            {client.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      data-bs-dismiss="modal"
                      className="btn btn-primary"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
