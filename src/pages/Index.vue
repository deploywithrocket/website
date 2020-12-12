<template>
    <layout>
        <section class="flex flex-col justify-center w-full px-12 lg:space-x-20 lg:items-center lg:px-0">
            <div class="w-full mt-8 mb-24 md:mt-16">
                <h1 class="text-6xl font-bold leading-tight tracking-tight text-center text-brand">
                    Rocket
                </h1>
                <p class="mt-4 text-2xl text-center transition-colors duration-200 text-on-background-blockquote">
                    The last project you will deploy.
                </p>

                <div class="flex justify-center">
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

            <img src="/screenshots/project-overview.png" alt="Project overview page" class="w-full rounded-lg shadow-lg">
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
