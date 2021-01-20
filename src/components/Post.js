// Add Button
export const PostButton = (props)  => {
    const style = {
      width: 24,
      height: 24
    }
    return (
      <button style={style} 
      onClick={() => props.handleClick()}>{props.label}</button>
    );
  };
  

// Dates Text
 export const PostText  = (props) => {
    const style = {
      border: "1px solid black",
      width: props.width
    }
    return (
      <div style={style}>{props.text}</div>
    );
  };
  
  export const Post = (props) => {
    const style = {
      display: "flex"
    }
    return (
      <div style={style}>
        <PostButton label="x" handleClick={props.removeItem} />
        <PostText text={props.startDate} width="200" />
        <PostText text={props.endDate} width="200" />
      </div>
    );
  };
  
// Dates List
 export const PostList = (props) => {
    console.log(props.postList);
    return (
      <ol>
        {
          props.postList.map((item, index) =>
            <Post 
              key={index}
              startDate={item.startDate}
              endDate={item.endDate}
              removeItem={() => props.removeItem(index)}
            />
          )
        }
      </ol>
    );
  };