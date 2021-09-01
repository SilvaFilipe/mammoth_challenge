<template>
  <div>
    <div class="white py-3 px-5">
      <div class="d-flex">
        <span class="subtitle-2">
          {{ file.name }}
        </span>
        <v-spacer />
        <v-icon @click="$emit('close')" x-small color="grey">
          mdi-close
        </v-icon>
      </div>

      <div v-if="file.updatedAt">
        <span class="font-weight-medium">Last update: </span>
        <span>{{ file.updatedAt | TimeAgo }}</span>
      </div>

      <div class="mt-3 d-flex">
        <v-btn depressed small width="80" class="rounded-sm" color="primary">
          Open
        </v-btn>
        <v-icon small color="grey" class="ml-2">
          mdi-dots-vertical
        </v-icon>
        <v-spacer />
        <v-icon small color="grey" class="mr-2">
          mdi-delete-outline
        </v-icon>
      </div>
    </div>

    <file-properties class="mt-4" :file="file" />
  </div>
</template>

<script>
import FileProperties from "@/components/FileProperties";
import TimeAgo from "@/filters/TimeAgo";

export default {
  props: {
    file: {
      type: Object,
      required: true,
    },
  },
  components: { FileProperties },
  filters: {
    TimeAgo,
  },
};
</script>
