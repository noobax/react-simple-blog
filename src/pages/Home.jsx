import { Card } from "../components/Card"
import { useFetch } from "../hooks/useFetch"

export  function Home() {

	const { loading, data, error } = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=10")

	if (loading)
		return 'loading'

	return (
		<>
		<h1>My blog</h1>
		 <div className="card-group">
			{data.map((post) => (
				<div key={post.id}>
				<Card
					id={post.id}
					title={post.title}
					body={post.body}
					image={"https://fastly.picsum.photos/id/731/200/200.jpg?hmac=f28-4BBT0mjsAystSYFss8hXUcYGvzvo054jqaZG4i0"}
				/>
				</div>
			))}
		</div>
		</>
	)
}
