
import Spinner from './Spinner';
import { useQuery } from '@apollo/client';
import { GET_JOBS } from '../queries/jobsQueries'
import JobCard from './JobCard';



export default function Jobs() {
  const {loading,error,data} = useQuery(GET_JOBS)
  if (loading) return <Spinner/>
  if (error) return <p> Ooops Something went wrong</p>
  return (
    <>
      { 
        data.jobs.length > 0 ? (
          <div className='raw mt-4'>
            {
              data.jobs.map((job) =>(
                <JobCard key={job.id} job={job}/>
              )
              )
              
            }

          </div>
        ) : (<p> No Jobs Available</p>)
      }


    </>
  )
}


