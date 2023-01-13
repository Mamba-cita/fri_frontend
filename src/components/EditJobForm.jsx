import { useState } from "react";
import { useMutation } from "@apollo/client";
import { GET_JOB } from "../queries/jobsQueries";
import { UPDATE_JOB } from "../mutations/JobMutation";

export default function EditJobForm({ job }) {
  const [name, setName] = useState(job.name);
  const [description, setDescription] = useState(job.description);
  const [container, setContainer] = useState(job.container);
  const [size, setSize] = useState(job.size);
  const [weight, setWeight] = useState(job.weight);
  const [origin, setOrigin] = useState(job.origin);
  const [destination, setDestination] = useState(job.destination);
  const [receiver, setReceiver] = useState(job.receiver);
  const [status, setStatus] = useState("");
  const [empty_return, setEmpty_return] = useState(job.empty_return);

  const [updateJob] = useMutation(UPDATE_JOB, {
    variables: {
      id: job.id,
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
    },
    refetchQueries: [{ query: GET_JOB, variables: { id: job.id } }],
  });

  const onSubmit = (e) => {
    e.preventDefault();
    updateJob(
      name,
      description,
      status,
      container,
      size,
      weight,
      origin,
      destination,
      receiver,
      empty_return
    );
  };

  return (
    <div className="mt-5">
      <h3>Update Job Info</h3>
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
            <option value="allocated">Allocated Waiting Pick-Up</option>
            <option value=" arrived_loading">Arrived At Loading Site</option>
            <option value="gate_loading">Gated In At Loading Site</option>
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

        <button
          type="submit"
          data-bs-dismiss="modal"
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
