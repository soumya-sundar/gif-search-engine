import React, { useState, useRef, useEffect} from 'react';
import './SearchPage.css';
import Input from '../Input/Input';
import Alert from '.././Alert/Alert';
import Api from '.././Api/Api';
import SearchResults from './SearchResults';

const initialFormState = {
  textInput:'',
  alert: {
    type: 0,
    message: null,
  },
  results: null
};

function SearchPage() {
  const [formData, setFormData] = useState(initialFormState);
  const textInput = useRef(null);

  useEffect(() => {
  }, []);

  //Function to call Api
  async function callApi() {
    Api(formData.textInput)
    .then(response => response.json())
    .then(response => {
        transformApiResponseData(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }

  //Function to transform api response data
  async function transformApiResponseData(data){
    const map = new Map();
    for (const value of Object.values(data)) {
      //console.log(value.id);
      map.set(value.id, value);
    }
    /*for (const [key, value] of map) {
      console.log(key + ' = ' + value)
    }*/
    setFormData({...formData, 'results' : map});
  }

  //Function OnChange to capture user input.
  async function onChange(e) {
    setFormData({ ...formData, 'textInput': e.target.value })
  }

  //Function to handle onBlur event for input controls.
  async function onBlur(alert, id) {
    if(alert.type !== 0) {
      if(id === 'textInput') {
        setFormData({ ...formData,
          'alert': {
            type: alert.type,
            message: alert.message
          },
          'textInput': '',
          'field': id
        });
      }
    } else {
      callApi();
    }
  }

  
  //Funtion to handle alert closure
  async function onClose () {
    setFormData({...formData, 'alert': {'type': 0, message: null}});
    textInput.current.focus();
  }

  //Function to handle button click
  async function onClick () {
    callApi();
  }

  return(
    <section className="container">
      <div className="input">
        <Input
          id={"textInput"}
          type="text"
          inputref={textInput}
          onChange={onChange}
          placeholder="Search Giphy"
          value={formData.textInput}
          minLength={4}
          maxLength={50}
          size={50}
          onBlur={onBlur}
          required
        />
        <div style={{paddingLeft: "20px"}}>
          <button type="button" onClick={onClick} className="search">Search</button>
        </div>
      </div>
      {formData.alert.type !== 0 &&
        <Alert
          type={formData.alert.type}
          message={formData.alert.message}
          onClose={onClose}
      />}
      {formData.results !== null && <SearchResults data={formData.results} /> }
    </section>
  );
}

export default SearchPage;