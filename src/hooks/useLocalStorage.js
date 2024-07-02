import useState from'react';
const useLocalStorage=(key,intialValue)=>{
    const[storedValue,setstoredValue]=useState(()=>{
        try{
            const item= window.localStorage.getItem(key);
            return item ?JSON.parse(item) :intialValue;
        }
        catch(error){
            console.log(error);
            return intialValue;
        }
    });
    const setValue=(value)=>{
        try{
            const valuetoStore=()=>{
                value instanceof Function ? value(storedValue):value;
                setstoredValue(value);
                window.localStorage.setItem(key,JSON.stringify(valuetoStore));
            }
        }
            catch(error){
                console.log(error);
            }
    };
    const removeValue = (value) => {
        window.localStorage.removeItem(value);
      };
      return [storedValue, setValue, removeValue];
    };
export default useLocalStorage;