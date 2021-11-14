<template>
  <div class="text-center bg-danger">
    <form @submit.prevent="addTodo">
      <input v-model="item"/>
      <input type="submit" class="bg-gray-900">
    </form>

    <ul v-for="(item, index) in toDos" :key="index">
      <li>{{item}}</li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: 'landing-page',
    data() {
      return {
        item: '',
        toDos: [],
      };
    },
    methods: {
      addTodo() {
        this.toDos.push(this.item);
      },
    },
  };
</script>
