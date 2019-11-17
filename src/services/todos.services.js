const url = 'https://todo-list-omarjdv.herokuapp.com/todos';

const getTodos = async () => {
  const response = await fetch(url+'/');
  const json = await response.json();
  const jsonParsed = json.map(item => ({
    text: item.text,
    completed: item.completed,
    id: item._id
  }));

  return jsonParsed;
}

const addTodos = async (text) => {
  const response = await fetch(url+'/', {
    method: 'POST',
    body: JSON.stringify({
      text,
      completed: false,
    }), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  });
const json = await response.json();
return json;
}

const deleteTodos = async (id) => {
  const response = await fetch(url + '/' + id, {
    method: 'DELETE',
  });

  const json = await response.json();
  if(json) {
    return true;
  } else {
    return false;
  }
}

const changeTodos = async (id, body) => {
  const response = await fetch(url+'/'+id, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers:{
      'Content-Type': 'application/json'
    }
  });
  const json = await response.json();
  return {
    id: json._id,
    text: json.text,
    completed: json.completed,
  };
}


export default {
  getTodos,
  addTodos,
  deleteTodos,
  changeTodos,
};
