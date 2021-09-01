<template>
  <v-row>
    <v-col cols="1">
      <div>
        Add
      </div>
    </v-col>
    <v-col>
      <v-row>
        <v-col>
          <files-list :files="files" />
        </v-col>
        <!--  <v-col>
          <files-list />
        </v-col>-->
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
