<template>
  <v-container>
    <v-row class="justify-center mt-3">
      <h3>Create New Category</h3>
      <v-col cols="10">
        <v-text-field
          v-model="category"
          label="Category name"
          required
        ></v-text-field>
        <v-btn class="mx-auto d-block" @click="addCategory">
          <v-icon>mdi-plus</v-icon>
          Add
        </v-btn>
      </v-col>
    </v-row>
    <v-row class="justify-center">
      <v-col cols="11">
        <v-list subheader>
          <v-subheader>Recent Category</v-subheader>
          <v-list-item
            v-for="(category, index) in $store.getters.getCategories"
            :key="index"
          >
            <v-list-item-content>
              <v-list-item-title>{{ category }}</v-list-item-title>
            </v-list-item-content>

            <v-list-item-icon>
              <v-btn text @click="editCategory(index)">
                <v-icon> mdi-pencil </v-icon>
              </v-btn>
              <v-btn text @click="deleteCategory(index)">
                <v-icon> mdi-delete </v-icon>
              </v-btn>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
        <v-dialog v-model="dialog" persistent max-width="290">
          <v-card>
            <v-card-title class="text-h5"> Edit Category </v-card-title>
            <v-card-text>
              <v-text-field
                v-model="edit_cat"
                label="Category name"
                required
              ></v-text-field
            ></v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="green darken-1" text @click="dialog = false">
                Cancle
              </v-btn>
              <v-btn color="green darken-1" text @click="updateCategory">
                Update
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Category",
  data: () => ({
    category: "",
    dialog: false,
    edit_cat: "",
    edit_index: "",
  }),
  methods: {
    addCategory() {
      this.$store.commit("addCategory", this.category);
      this.category = "";
    },
    deleteCategory(index) {
      if (!confirm("Are You Sure To Delete")) {
        return;
      }
      this.$store.commit("deleteCategory", index);
    },
    editCategory(index) {
      this.dialog = true;
      this.edit_cat = this.$store.getters.getCategories[index];
      this.edit_index = index;
    },
    updateCategory() {
      this.$store.commit("setCategory", {
        index: this.edit_index,
        category: this.edit_cat,
      });
      this.dialog = false;
    },
  },
};
</script>

<style></style>
