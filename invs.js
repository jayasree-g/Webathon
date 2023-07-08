import './invs.css'

function Users(props){
    return(
        <div className='user'>
            <img src={props.data.image} className='imgg' width='100px' height='120px'></img>
            <h3>{props.data.name}</h3>
            <div className='left'><img src={props.data.logo} className='log' width='20px' height='20px'></img></div>
            <p>{props.data.para}</p>
        </div>
    )
}
export default Users