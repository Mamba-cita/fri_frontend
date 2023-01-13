import { useNavigate } from "react-router-dom"
import {FaTrash} from 'react-icons/fa'
import { GET_JOBS } from "../queries/jobsQueries"
import { useMutation } from "@apollo/client"
import { DELETE_JOB } from "../mutations/JobMutation"


export default function DeleteJobButton({jobId}) {

    const navigate = useNavigate();
    const [deleteJob] = useMutation(DELETE_JOB,{
        variables:{id:jobId},
        onCompleted: () => navigate("/"),
        refetchQueries:[{query:GET_JOBS}],
    })
  return (
    <div className="d-flex mt-5 ms-auto">
      <button className="btn btn-danger m-2" onClick={deleteJob}>
        <FaTrash className="icon"/>Delete Job
      </button>
    </div>
  )
}
