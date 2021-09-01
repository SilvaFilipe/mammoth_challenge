<template>
  <v-app>
    <v-app-bar app color="grey lighten-3" flat>
      <v-avatar class="mr-10" color="grey darken-1" size="32"></v-avatar>

      <v-btn v-for="link in links" :key="link" text>
        {{ link }}
      </v-btn>

      <v-spacer />

      <v-responsive max-width="260">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <v-container>
        <files />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Files from "@/components/Files";

export default {
  components: { Files },
  data: () => ({
    links: ["Dashboard", "Messages"],
  }),
};
</script>

<style>
@import "./css/app.css";
</style>
