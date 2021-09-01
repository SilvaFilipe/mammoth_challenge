<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header class="py-1" style="min-height:35px">
        <span class="font-weight-bold">Properties</span>
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <div>
          <div>
            <span class="font-weight-medium">Name: </span>
            <span>{{ file.name }}</span>
          </div>
          <div>
            <span>
              Created on {{ file.createdAt | PrettyDate }} by
              {{ file.createdBy }}
            </span>
          </div>
          <v-divider class="my-2" />
        </div>

        <div>
          <div v-if="file.rows && file.cols">
            <span class="font-weight-medium">Rows: </span>
            <span>{{ file.rows | ThousandsSeparators }} </span>
            <span class="font-weight-medium">Columns: </span>
            <span>{{ file.cols | ThousandsSeparators }} </span>
          </div>
          <div>
            <span class="font-weight-medium">Size: </span>
            <span>{{ file.size }}.00 KB</span>
          </div>
          <v-divider class="my-2" />
        </div>

        <div v-if="file.queryMetrics && file.queryMetrics.length > 0">
          <div class="d-flex">
            <span class="text-uppercase font-weight-bold">Query Metrics</span>
            <v-spacer />
            <span class="text-decoration-underline">Edit metrics</span>
          </div>
          <div class="mt-2 pa-2 grey lighten-2 query-metrics">
            <p v-for="(metric, index) in file.queryMetrics" :key="index">
              {{ metric }}
            </p>
          </div>
          <v-divider class="my-2" />
        </div>

        <div>
          <div class="d-flex align-center">
            <span class="text-uppercase font-weight-bold">
              Data Retrieval Schedule
            </span>
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
            >
              Edit schedule
            </span>
          </div>
          <div v-if="file.dataRetrievalSchedule">
            <div class="d-flex">
              <v-spacer />
              <span class="text-decoration-underline primary--text">
                Retrieve latest data
              </span>
            </div>
            <div>
              <span>
                {{ SCHEDULE_TYPES[file.dataRetrievalSchedule.type] }}
              </span>
            </div>
            <div>
              <span class="font-weight-medium">Range: </span>
              <span>Start </span>
              <span>{{ file.dataRetrievalSchedule.range | PrettyDate }}</span>
            </div>
            <div class="mt-3">
              <span class="font-weight-medium">Last datapull: </span>
              <span>{{
                file.dataRetrievalSchedule.lastDatapull | PrettyDate
              }}</span>
              <v-icon x-small color="primary" class="ml-2">
                mdi-circle
              </v-icon>
            </div>
            <div>
              <span class="font-weight-medium">Next schedule datapull: </span>
              <span>
                {{ file.dataRetrievalSchedule.nextDatapull | PrettyDate }}
              </span>
            </div>
          </div>
          <v-divider class="my-2" />
        </div>

        <div>
          <p class="text-uppercase font-weight-bold mb-1">Sync Settings</p>
          <div class="d-flex align-center">
            <span class="text-uppercase text--disabled">
              Auto-sync
            </span>
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
