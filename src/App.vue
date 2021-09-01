<template>
  <v-app>
    <v-app-bar app color="grey lighten-3" flat>
      <v-img max-height="20" max-width="20" src="./assets/mammoth_logo.png" />
      <div class="ml-3">
        <span>Data Library > </span>
        <span class="primary--text">Postgre</span>
      </div>

      <v-spacer />
      <v-btn depressed tile color="secondary" style="text-transform: none;">
        Payment due! Fix now!
      </v-btn>
      <v-icon color="primary" class="ml-2">
        mdi-flash-outline
      </v-icon>
      <v-icon color="grey" class="ml-2">
        mdi-bell-outline
      </v-icon>
      <v-icon color="grey" class="ml-4">
        mdi-help-circle-outline
      </v-icon>
      <v-divider vertical inset class="mx-2" />
      <v-icon color="grey">
        mdi-account-circle-outline
      </v-icon>
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
};
</script>

<style>
@import "./css/app.scss";
</style>
