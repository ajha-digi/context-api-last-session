export const getUser = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      const formattedResp = await response.json()
      return formattedResp
}