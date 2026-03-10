<template>
    <Menubar :model="items" class="navbar">
        <!-- <template #start>

        </template> -->
        <template #item="{ item, props, hasSubmenu }">
            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                <a  class="undraggable" :href="href" v-bind="props.action" @click="navigate">
                    <span :class="item.icon" />
                    <span>{{ item.label }}</span>
                </a>
            </router-link>
            <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                <span :class="item.icon" />
                <span>{{ item.label }}</span>
                <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
            </a>
        </template>
    </Menubar>
</template>

<script lang="ts">
import Menubar from 'primevue/menubar'
import type { MenuItem } from 'primevue/menuitem';

export default {
    name: 'AllBanner',
    components: {
        Menubar
    },
    data() {
        return {
            items: [
                {
                    label: 'Home',
                    icon: 'pi pi-home',
                    route: '/'
                },
                {
                    label: "Projects",
                    icon: 'pi pi-briefcase',
                    items: [
                        {
                            label: 'Meta Playground',
                            icon: 'pi pi-bullseye',
                            route: '/meta-playground'
                        },
                    ]
                }
            ] as MenuItem[]
        }
    }
};
</script>

<style scoped>
nav{
    padding:1em;
}
h1 {
    color: #42b983;
}
#logo {
    height:50px;
    width: auto;
}
.nav-item{
    padding: 0.3em;
}
#logo-container{
    display: flex;
    align-items: center;
}
.undraggable {
    -webkit-user-drag: none; /* Safari, Chrome */
    -khtml-user-drag: none;  /* Old Konqueror */
    -moz-user-drag: none;    /* Firefox (non-standard) */
    -o-user-drag: none;      /* Old Opera */

    /* Prevent text/image selection */
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}
</style>