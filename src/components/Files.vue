<template>
  <v-row>
    <v-col cols="12" md="1" class="d-flex justify-center">
      <div>
        <v-btn class="mt-7" fab small depressed color="primary">
          <v-icon> mdi-plus </v-icon>
        </v-btn>
      </div>
    </v-col>
    <v-col>
      <v-row>
        <v-col>
          <files-list :files="files" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import FilesList from "@/components/FilesList";
import exampleFiles from "@/example-data/files";

export default {
  components: { FilesList },
  data: () => ({
    files: exampleFiles,
  }),
};
</script>
