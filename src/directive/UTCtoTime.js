export default{
  mounted(el){
    const date = el.textContent
    el.textContent = new Date(date).toLocaleTimeString()

  },
  name: 'time'
}