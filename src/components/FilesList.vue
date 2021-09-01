<template>
  <v-row>
    <v-col>
      <v-row class="blue lighten-3 mb-2">
        <v-col cols="1" />
        <v-col cols="7">
          File name
        </v-col>
        <v-col cols="2">
          Cols | Rows
        </v-col>
        <v-col cols="2">
          Last modified
          <v-icon
            x-small
            color="grey"
            @click="ascendingOrder = !ascendingOrder"
          >
            {{ ascendingOrder ? "mdi-arrow-up" : "mdi-arrow-down" }}
          </v-icon>
        </v-col>
      </v-row>
      <div
        v-for="file in orderedFiles"
        :key="file.id"
        @click="selectedFileId = file.id"
      >
        <files-list-item
          :file="file"
          :is-selected="selectedFileId == file.id"
          class="my-1 cursor-pointer"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import FilesListItem from "@/components/FilesListItem";

export default {
  props: {
    files: {
      type: Array,
      default: () => [],
    },
  },
  components: { FilesListItem },
  data: () => ({
    selectedFileId: null,
    ascendingOrder: true,
  }),
  computed: {
    orderedFiles() {
      if (this.ascendingOrder)
        return this.files.sort((a, b) =>
          new Date(b.lastUpdate) < new Date(a.lastUpdate) ? 1 : -1
        );
      return this.files.sort((a, b) =>
        new Date(b.lastUpdate) > new Date(a.lastUpdate) ? 1 : -1
      );
    },
  },
};
</script>
