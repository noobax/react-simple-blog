import { useState } from "react";
import { Button } from "../components/Button";
import { useFetch } from "../hooks/useFetch";
import { Modal } from "../components/Modal";
import { createPortal } from "react-dom";
import { useEffect } from "react";

export function Post({id}) {

	
	const {loading, error, data, setData} = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
	const [isActive, setToggle] = useState(false)



	if (loading)
		return 'loading'

	if (error)
		return 'error'

	const handleSave = (newData) => {
		setData({
			...data,
			...newData
		})
		setToggle()
	}

	
	return (
		<div className="container">
			<h1 id="title">{data.title}</h1>
			<p id="body">{data.body}</p>
			<Button disabled={isActive} onToggle={setToggle} caption={'Edit'}/>
			{isActive && createPortal(<Modal 
				onToggle={setToggle}
				data={data}
				onSave={handleSave}/>, document.body)}
		</div>
	)
}
