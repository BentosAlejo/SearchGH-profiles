import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState, useEffect} from 'react'

export default function App() {

  const [search, setSearch] = useState('')
  const [user, setUser] = useState('')
  const [selected, setSelected] = useState('')

    useEffect(()=>{
      fetch(`https://api.github.com/users/${search}`)
      .then(async(response)=>{
       const users = await response.json()
       setUser(users)
      })
      .catch((error)=> console.log('error: ', error))
      console.log('hice render')
      },[selected])// aquellos elementos cuyo cambio provocara la ejecucion de useEffect
      
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Search for a user</Text>
        <input 
          placeholder="username" 
          style={styles.input}
          onChange={(e)=>{setSearch(e.target.value)}}
          >
          </input>
         <button style={styles.button} onClick={()=>{setSelected(search), console.log(search)}}>Search</button>{/*onClick={()=>{(setUser(search), console.log(search))}} */}
        <section style={styles.section}>
          {user && (
            <div>
                <img src={user.avatar_url} alt='avatar'/>
                <h4 style={styles.title}>{user.login}</h4>
                <p>{user.bio}</p>


            </div>

          )}
          
        </section>
        <StatusBar style="auto" />
      </View>
    
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#434B4D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize:55,
    color:'#fff',
  },
  input:{
    borderRadius:'5px',
    width:200,
    height:30,
    marginTop:20,
    border:'5px solid #fff'
  },
  button:{
    width:200,
    height:30,
    marginTop:10,
    color:'#fff',
    backgroundColor:'#5DC1B9',
    borderRadius:'5px',
  },
  section:{
    backgroundColor:'#000',
    opacity:0.4,
    marginTop:15,
    width:300,
    height:500
  }
});


     // const fetchUser = async()=>{
    //   try{
    //     const response = await fetch(`https://api.github.com/users/${search}`)
    //     const data =  response.json()
    //     console.log(data)
    //     setUser(data)
    //   }catch(error){
    //     console.log('error', error.message)
        
    //   }
    // }


    
  // }
  // useEffect(()=>{
  //  //  const newSearch = fetch(`https://api.github.com/users/${search}`)
  //    setSearch(newSearch)
     
  // })
  // const fetchUser = async()=>{
  //   setUser(search)
  // }



