<template>
  <v-row
    class="white-background rounded-sm align-center"
    :class="{ 'selected-item': isSelected }"
  >
    <v-col cols="1" class="d-flex justify-center">
      <v-img
        max-height="20"
        max-width="20"
        :src="FILE_TYPES_ICONS[file.type]"
      />
    </v-col>
    <v-col cols="7">
      {{ file.name }}
    </v-col>
    <v-col cols="2">
      <span v-if="file.cols && file.rows"
        >{{ file.cols | ThousandsSeparators }} |
        {{ file.rows | ThousandsSeparators }}
      </span>
      <span v-else class="text--disabled">Empty dataset</span>
    </v-col>
    <v-col cols="2">
      <span v-if="file.lastUpdate">{{ file.lastUpdate | TimeAgo }}</span>
    </v-col>
  </v-row>
</template>

<script>
import { FILE_TYPES_ICONS } from "@/constants/fileTypes";
import ThousandsSeparators from "@/filters/ThousandsSeparators";
import TimeAgo from "@/filters/TimeAgo";

export default {
  props: {
    file: {
      type: Object,
      required: true,
    },
    isSelected: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    FILE_TYPES_ICONS,
  }),
  filters: {
    ThousandsSeparators,
    TimeAgo,
  },
};
</script>

<style scoped>
.white-background {
  background-color: white;
}

.selected-item {
  border: 1px solid var(--v-primary-base);
  border-left-width: 6px;
}
</style>
