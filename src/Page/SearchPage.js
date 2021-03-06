import React, { useRef } from 'react';
import './SearchPage.css';
import Input from '../Components/Input/Input';
import Alert from '../Components/Alert/Alert';
import Api from '../Components/Api/Api';
import SearchResults from './SearchResults';
import {useSelector} from 'react-redux';
import { useDispatch } from 'react-redux'

function SearchPage() {
  const textInput = useRef(null);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  //Function to call Api
  function callApi() {
    Api(state.textInput)
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
      map.set(value.id, value);
    }
    dispatch({type: 'setState', textInput: state.textInput , alert: state.alert, payload: map});
  }

  //Function OnChange to capture user input.
  async function onChange(e) {
    dispatch({type: 'setState', textInput: e.target.value, alert: state.alert, payload: null});
  }

  //Function to handle onBlur event for input controls.
  async function onBlur(alert, id, e) {
    if(alert.type !== 0) {
      if(id === 'textInput') {
        dispatch({
          type: 'setState',
          textInput: state.textInput,
          alert: alert,
          payload: null});
        }
      } else {
        if(state.textInput !== "") {
          callApi();
        }
    }
  }

  //Funtion to handle alert closure
  async function onClose () {
    dispatch({ 
      type: 'setState', 
      textInput: "", 
      alert: {
        type: 0,
        message: null,
      }, 
      payload: null
    });
    textInput.current.focus();
  }

  //Function to handle button click
  async function onClick () {
    if(state.textInput !== "") {
      callApi();
    }
  }
  
  return(
    <section className="container">
      <div className="input">
        <Input
          id={"textInput"}
          type="text"
          onChange={onChange}
          inputref={textInput}
          placeholder="Search Giphy"
          value={state.textInput}
          minLength={3}
          maxLength={50}
          size={50}
          onBlur={onBlur}
          required
        />
        <div style={{paddingLeft: "20px"}}>
          <button type="button" onClick={onClick} className="search">Submit</button>
        </div>
      </div>
      {state.alert.type !== 0 &&
        <Alert
          type={state.alert.type}
          message={state.alert.message}
          onClose={onClose}
      />}
      <SearchResults/>
    </section>
  );
}

export default SearchPage;