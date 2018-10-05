<template>
  <form
    name="contact"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    action=""
    @submit.prevent="handleSubmit"
  >
    <input
      type="hidden"
      name="form-name"
      value="contact"
    >
    <p class="hidden">
      <label>Don’t fill this out: <input name="bot-field"></label>
    </p>
    <div class="form-block">
      <input
        id="name"
        v-model="name"
        type="text"
        name="name"
        placeholder="Your name"
      >
    </div>
    <div class="form-block">
      <input
        id="email"
        v-model="email.value"
        type="email"
        name="email"
        placeholder="Your email address"
      >
    </div>
    <div class="form-block">
      <textarea
        id="message"
        v-model="message.text"
        name="message"
        placeholder="Please leave a short summary of the project you would like us to help with"
      />
    </div>
    <div class="form-block">
      <input
        type="submit"
        value="Send"
      >
    </div>
  </form>
</template>

<style lang="scss">
form {
  @apply w-full px-6 mt-2 z-10 relative text-grey-darkest;
}
.form-block input,
textarea {
  @apply w-full p-4 mb-2 leading-normal;
}
</style>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit() {
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: this.encode({ 'form-name': 'contact', ...this.form })
      })
        .then(() => alert('Success!'))
        .catch(error => alert(error))
    }
  }
}
</script>
