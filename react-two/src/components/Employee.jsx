
import useFetch from './useFetch'; // Import the hook

function Employees() {
  // All fetching logic is now replaced by this single line:
  const { data, error, loading } = useFetch('https://dummy.restapiexample.com/api/v1/employees');

  if (loading) return <p>Loading.....</p>;
  if (error) return <p>Error.....{error.message}</p>; 

  return (
    <div className='App'>
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      {data && data.map((ele) => (
        <p key={ele.id}>{ele.employee_name}</p>
      ))}
    </div>
  );
}

export default Employees;