const getRooms=async()=>{
    try {
        const res=await fetch('/home/rooms',{
            method:"GET",
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
        console.log(res)
        const body=await res.json()
        if (res.ok) {
           console.log(body)
        }
        else{
            console.log(body)
        }
        
    } catch (error) {
        alert(error)
    } 
}

getRooms()