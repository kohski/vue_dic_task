const app = new Vue({
  el:"#app",
  data:{
    largestNumber: 0,
    name: '',
    course: '',
    term: '',
    items:[]
  },
  methods:{
    addItem: function(){
      this.largestNumber += 1;
      item = {
        id: this.largestNumber,
        name: this.name,
        course: this.course,
        term: this.term
      }
      this.items.push(item)
      this.name = ''
      this.course = ''
      this.term = ''
    }
  }
})