function Avatar({url,className}) {
    return (
        <img loading='lazy' className={`rounded-full cursor-pointer h-10 transition duration-150 transform hover:scale-110 ${className}`} src={url} alt='profile pic'/>
            
        
    )
}

export default Avatar
