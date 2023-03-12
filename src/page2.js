import './App.css';
import axios from 'axios';

function page2() {
    const hitAPI = () => {
        const options = {
          method: 'POST',
          url: 'https://api.cohere.ai/v1/generate',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Bearer oeSQtij6wRDr91pa34NznONl3zjShiQo1EUVTjcQ'
          },
          data: {
            max_tokens: 300,
            return_likelihoods: 'NONE',
            truncate: 'END',
            prompt: 'Once upon a time in a magical land called'
          }
        };
    
        axios
          .request(options)
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.error(error);
          });
      }

  return (
    <div className="Page 2">
      <header className="App-header">
        <p>
        this is page 2
        </p>
        {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
      </header>
    </div>
  );
}

export default page2;