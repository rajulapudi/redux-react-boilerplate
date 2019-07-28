



const fetchPosts = () => {
	axios.get().then(res => {
		console.log(res.data);
	});
};
