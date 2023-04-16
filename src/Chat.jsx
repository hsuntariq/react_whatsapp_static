const Chat = ({image,name,message,time,newMsg}) => {
    return(
      <>
        <div className="row">
          <div className="col-lg-3">
            <img style={{
              width:'100%',
              height:'100%',
              clipPath:'circle()',
              objectFit:'cover'
            }} src={image} alt="" />
          </div>
          <div className="col-lg-6 inbox">
              <h3 className="text-capitalize">{name}</h3>
              <p className="text-secondary">
                {message}
              </p>
          </div>
          <div style={{
              textAlign:"right"
            }} className="col-lg-3">
            <p className="text-success">
                {time}
            </p>
            <div style={{
              textAlign:"right",
              width:'max-content',
              clipPath:'circle()'
            }} className="new-msg bg-success text-dark ms-auto">
             <p style={{padding:'0.4rem',
              }} className="text-success text-right text-light">
             {newMsg}
              </p> 
            </div>
          </div>
        </div>
      </>
    )
  }

export default Chat;