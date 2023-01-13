
import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import { useQuery } from '@apollo/client';
import { GET_JOB } from '../queries/jobsQueries';
import ClientInfo from '../components/ClientInfo';
import DeleteJobButton from '../components/DeleteJobButton';
import EditJobForm from '../components/EditJobForm';



export default function Job() {

const{ id } = useParams();
const { loading,error,data } = useQuery(GET_JOB,
{
    variables:{id}
});
if (loading) return <Spinner/>;
if (error) return <p>Ooops Something went wrong</p>;

  return (
    <>
      { !loading && !error && (
        <div className='max-auto w-75 card p-5'>
            <Link to="/" className='btn btn-light btn-sm w-25 d-inline ms-auto'>Back</Link>
            <h1>{data.job.name}</h1>
            <p>{data.job.description}</p>
            <p>{data.job.container}</p>
            <p>{data.job.size}</p>
            <p>{data.job.weight}</p>
            <p>{data.job.origin}</p>
            <p>{data.job.destination}</p>
            <p>{data.job.receiver}</p>
            <h5 className='mt-3'>Job Status</h5>
            <p className='lead'>{data.job.status}</p>


            <ClientInfo client={data.job.client} />

            <EditJobForm job={data.job}/>
            <DeleteJobButton  jobId={data.job.id}/>
        </div>
      )}
    </>
  )
}
