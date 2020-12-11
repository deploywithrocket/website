<template>
    <layout>
        <section class="flex flex-col w-full px-12 lg:space-x-20 lg:items-center lg:flex-row lg:px-0">
            <!-- Left -->
            <div class="w-full mb-20 lg:w-1/2 lg:mb-0">
                <h1 class="text-6xl font-bold leading-tight tracking-tight text-brand">
                    Rocket
                </h1>
                <p class="mt-4 text-2xl transition-colors duration-200 text-on-background-blockquote">
                    The last project you will deploy.
                </p>

                <div class="flex">
                    <g-link
                        to="/docs/"
                        class="px-4 py-3 mt-8 mr-4 text-lg font-semibold transition-colors duration-200 rounded-lg shadow-md bg-brand text-on-brand"
                    >
                        Get started
                    </g-link>
                    <a
                        href="https://github.com/deploywithrocket/core"
                        class="px-4 py-3 mt-8 text-lg font-semibold transition-colors duration-200 rounded-lg bg-button text-on-button"
                    >
                        See on GitHub
                    </a>
                </div>
            </div>
        </section>
    </layout>
</template>

<script>
import Layout from '~/layouts/Site';
import Icon from '@/components/Icon';

export default {
    components: {
        Layout,
        Icon,
    },

    metaInfo() {
        return {
            title: `Rocket - ${this.$static.metadata.siteDescription}`,
            titleTemplate: '%s',
        };
    },
};
</script>

<static-query>
query {
  metadata {
    siteDescription
  }
}
</static-query>
