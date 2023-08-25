const Detail = () => {
    const data = fetch('/api/inbound')
        .then((response) => response.json())
        .then((data) => console.log(data))

    return <div>상세 페이지</div>
}

export default Detail
