import {useEffect,useState} from 'react';
import{checkApiKey} from '../utils/checkKeys';
import PropTypes from 'prop-types';
const Setting=({modalOpen,setmodalOpen})=> {
    const apikey=window.localStorage.getItem('api-key')||'';
    const[loading,setLoading]=useState('false');
    cosnt[errorMsg,seterrorMsg]=useState('');
    cosnt[input,setInput]=useState('');
    const saveKey=async(e)=>{
        e.preventDefault();
        setLoading(true);
        seterrorMsg('');
        const keys= input;
        await checkApiKey(keys).then(()=>{
            window.localStorage.setItem('api-key' ,keys);
            setmodalOpen(false);
            console.log('works');
        })
        .catch(()=>{
            console.log('not works');
            seterrorMsg('incorectkey');
        });
        setLoading(false);
    };
        const removeApiKey= ()=>{
            window.localStorage.removeItem('api-key');
            setInput('');
        };
        useEffect(()=>{
            if(modalOpen){
                setInput(apikey);
            }[apikey,modalOpen]
        });
        return(
            <form
            onSubmit={saveKey}
            className='flex flex-col items-center justify-center gap-2'>
            <p className='text-lg font-semibold'>Use your own API-key.</p>
            <p>keys are saved in your own browser</p>
            <p className='italic'>
              Get OpenAI API key{' '}
              <a
                className='text-blue-600'
                rel='noreferrer'
                target='_blank'
                href='https://platform.openai.com/account/api-keys'>
                here
              </a>
              .
            </p>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type='password'
              className='w-full max-w-xs input input-bordered'
            />
            <button disabled={loading} className='w-full max-w-xs btn btn-outline'>
              {loading ? (
                <>
                  <span className='loading loading-spinner' />
                  <p>Checking Api Key</p>
                </>
              ) : (
                'save to localStorage'
              )}
            </button>
            {apiKey && input && (
              <span
                onClick={removeApiKey}
                disabled={loading}
                className='w-full max-w-xs btn btn-error'>
                remove keys
              </span>
            )}
            <p>{errorMsg}</p>
          </form>
        );
    };
    export default Setting;

Setting.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  setModalOpen: PropTypes.func.isRequired,
};
