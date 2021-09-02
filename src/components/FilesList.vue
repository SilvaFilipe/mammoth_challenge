<template>
  <v-row>
    <v-col cols="12" md="">
      <v-row class="mb-1">
        <v-col cols="5" offset="1">
          <span class="font-weight-medium">File name</span>
        </v-col>
        <v-col cols="3">
          <span class="font-weight-medium">Cols | Rows</span>
        </v-col>
        <v-col cols="3" class="d-flex align-center">
          <div
            @click="descendingOrder = !descendingOrder"
            class="cursor-pointer d-flex"
            style="width:fit-content"
          >
            <span class="font-weight-medium">Last modified</span>
            <v-icon small color="grey">
              {{ descendingOrder ? "mdi-menu-down" : "mdi-menu-up" }}
            </v-icon>
          </div>
        </v-col>
      </v-row>
      <div
        v-for="file in orderedFiles"
        :key="file.id"
        @click="selectedFile = file"
      >
        <files-list-item
          :file="file"
          :is-selected="selectedFile && selectedFile.id == file.id"
          class="my-1 cursor-pointer"
        />
      </div>
    </v-col>
    <v-col v-if="selectedFile">
      <file-details
        class="mt-10"
        :file="selectedFile"
        @close="selectedFile = null"
      />
    </v-col>
  </v-row>
</template>

<script>
import FilesListItem from "@/components/FilesListItem";
import FileDetails from "@/components/FileDetails";

export default {
  name: "FilesList",
  props: {
    files: {
      type: Array,
      default: () => [],
    },
  },
  components: { FilesListItem, FileDetails },
  data: () => ({
    selectedFile: null,
    descendingOrder: true,
  }),
  computed: {
    orderedFiles() {
      if (this.descendingOrder)
        return this.files.sort((a, b) =>
          new Date(b.updatedAt) < new Date(a.updatedAt) ? 1 : -1
        );
      return this.files.sort((a, b) =>
        new Date(b.updatedAt) > new Date(a.updatedAt) ? 1 : -1
      );
    },
  },
};
</script>
