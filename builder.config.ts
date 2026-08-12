import { defineBuilderConfig } from '@afilmory/builder'

export default defineBuilderConfig(() => ({
  storage: {
    provider: 'local',
    basePath: './photos',
    distPath: './apps/web/public/photos',
    baseUrl: '/photos',
    excludeRegex: '^\\.DS_Store$|/\\.DS_Store$',
  },
  system: {
    processing: {
      defaultConcurrency: 4,
      enableLivePhotoDetection: false,
      digestSuffixLength: 0,
    },
    observability: {
      showProgress: true,
      showDetailedStats: true,
    },
  },
  plugins: [],
}))
