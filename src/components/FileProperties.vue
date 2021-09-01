<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header>
        Properties
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <div>
          <div>
            <span>Name: </span>
            <span>{{ file.name }}</span>
          </div>
          <div>
            <span>Created on </span>
            <span>{{ file.createdAt | PrettyDate }}</span>
          </div>
          <v-divider class="my-2" />
        </div>

        <div>
          <div v-if="file.rows && file.cols">
            <span>Rows: </span>
            <span>{{ file.rows | ThousandsSeparators }} </span>
            <span>Columns: </span>
            <span>{{ file.cols | ThousandsSeparators }} </span>
          </div>
          <div>
            <span>Size: </span>
            <span>{{ file.size }}.00 KB</span>
          </div>
          <v-divider class="my-2" />
        </div>

        <div v-if="file.queryMetrics && file.queryMetrics.length > 0">
          <div class="d-flex">
            <span class="text-uppercase">Query Metrics</span>
            <v-spacer />
            <span class="text-decoration-underline">Edit metrics</span>
          </div>
          <div class="grey lighten-2 query-metrics">
            <p v-for="(metric, index) in file.queryMetrics" :key="index">
              {{ metric }}
            </p>
          </div>
          <v-divider class="my-2" />
        </div>

        <div>
          <div class="d-flex">
            <span class="text-uppercase">Data Retrieval Schedule</span>
            <v-switch
              v-model="file.dataRetrievalSchedule"
              class="pa-0 mt-0 ml-2"
              hide-details
            />
            <v-icon x-small color="grey" class="mr-2">
              mdi-information-outline
            </v-icon>
            <v-spacer />
            <span
              v-if="file.dataRetrievalSchedule"
              class="text-decoration-underline"
              >Edit schedule</span
            >
          </div>
          <div v-if="file.dataRetrievalSchedule">
            <div class="d-flex">
              <v-spacer />
              <span class="text-decoration-underline primary--text"
                >Retrieve latest data</span
              >
            </div>
            <div>
              <span>
                {{ SCHEDULE_TYPES[file.dataRetrievalSchedule.type] }}</span
              >
            </div>
            <div>
              <span>Range: </span>
              <span>Start </span>
              <span>{{ file.dataRetrievalSchedule.range | PrettyDate }}</span>
            </div>
            <div class="mt-3">
              <span>Last datapull: </span>
              <span>{{
                file.dataRetrievalSchedule.lastDatapull | PrettyDate
              }}</span>
              <v-icon x-small color="primary" class="ml-2">
                mdi-circle
              </v-icon>
            </div>
            <div>
              <span>Next schedule datapull: </span>
              <span>{{
                file.dataRetrievalSchedule.nextDatapull | PrettyDate
              }}</span>
            </div>
          </div>
          <v-divider class="my-2" />
        </div>

        <div>
          <p class="text-uppercase">Sync Settings</p>
          <div class="d-flex">
            <span class="text-uppercase text-caption text--disabled"
              >Auto-sync</span
            >
            <v-switch
              v-model="file.autoSync"
              class="pa-0 mt-0 ml-2"
              hide-details
            />
            <v-icon x-small color="grey" class="mr-2">
              mdi-information-outline
            </v-icon>
          </div>
        </div>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import ThousandsSeparators from "@/filters/ThousandsSeparators";
import PrettyDate from "@/filters/PrettyDate";
import { SCHEDULE_TYPES } from "@/constants/scheduleTypes";

export default {
  props: {
    file: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    SCHEDULE_TYPES,
  }),
  filters: {
    ThousandsSeparators,
    PrettyDate,
  },
};
</script>

<style>
.query-metrics {
  height: 100px;
  overflow: auto;
}
</style>
