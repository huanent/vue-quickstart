<template>
    <div>
      <is-loading v-if='isLoading'></is-loading>
      <loading-error v-if='isError' @reload='load'></loading-error>
      <component :is="nowComponent" v-if='!isLoading&&!isError'></component>
    </div>
</template>

<script>
import IsLoading from "@/components/IsLoading";
import LoadingError from "@/components/LoadingError";
export default {
  data() {
    return {
      nowComponent: null,
      isLoading: true,
      isError: false
    };
  },
  props: {
    componentPath: String,
    delay: Number
  },
  components: {
    IsLoading,
    LoadingError
  },
  mounted() {
    this.load();
  },
  methods: {
    load() {
      import(`@/${this.componentPath}`)
        .then(rsp => {
          setTimeout(() => {
            this.nowComponent = () => import(`@/${this.componentPath}`);
            this.isLoading = false;
            this.isError = false;
          }, this.delay);
        })
        .catch(err => {
          this.nowComponent = LoadingError;
          this.isError = true;
          this.isLoading = false;
        });
    }
  }
};
</script>
