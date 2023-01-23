
import axios from "axios"


const useHttp=()=>{

    const sendRequest=async(userEmail,request,email)=>{
        
        
        let url=`https://mail-project-cf1f9-default-rtdb.firebaseio.com/${userEmail}.json`
        if (request.type==='delete' || request.type==='patch' || request.type==='put'){
            url= `https://mail-project-cf1f9-default-rtdb.firebaseio.com/${userEmail}/${email.id}.json`
        }
        
        let data
        if (request.type==='post' || request.type==='put' || request.type==='patch'){
            data=request.data
        }
try{
        let inbox=await axios({
            method:request.type,
            url:url,
            data:data
        })
        if (inbox.statusText!=='OK'){
            throw new Error(inbox.message)
        }
        
        return inbox
    }catch(error){
        console.log(error)
        
    }
        
    }

    return [sendRequest]

}

export default useHttp