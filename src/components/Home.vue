<template>
    <div id="page-top">
        <!-- Header -->
        <tb-header/>
        <!-- End Header -->
        <!-- Content -->
        <section class="container center-align">
            <div class="filter-bar row">
                <input type="text" class="country tb-input center-align col m3 s12" placeholder="Pays">
                <input type="text" class="category tb-input center-align col m3 s12" placeholder="Catégorie">
                <button class="tb-btn btn-red search-btn btn-red col m3 s12">Rechercher</button>
            </div>
            <!-- Section favorites -->
            <div class="favorites row">
                <h2 class="">Les favoris</h2>
                <div class="section-deco">v</div>
                <div class="deco-line col m12"></div>

                <!-- Cards section -->
                <div class="tb-cards row">
                    <tb-card/>
                    <tb-card/>
                    <tb-card/>
                    <tb-card/>
                </div>
                <!-- End cards section -->
            </div>
            <!-- End section favorites -->
            <!-- Section map -->
            <div class="map row">
                <h2 class="">La carte</h2>
                <div class="section-deco">v</div>
                <div class="deco-line m12"></div>
                <div class="wrapper-map col m12 s12">It's supposed to be a map</div>
            </div>
            <!-- End section map -->
        </section>
        <!-- End Content -->
    </div>
</template>

<script>
    import {HTTP} from './../http/http-base';
    import tbHeader from './Header.vue';
    import tbCard from './Card.vue';

    export default {
        name: "HelloWorld",
        components: { tbHeader, tbCard },
        data() {
            return {};
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
