const listUser = async () => {
  const resp = await fetch('https://simple-contact-crud.herokuapp.com/contact');
  return await resp.json();
};

export {listUser};
