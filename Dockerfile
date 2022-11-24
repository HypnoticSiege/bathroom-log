FROM node:18 as base

# Add package file
COPY package.json ./
COPY yarn.lock ./

# Install deps w/ yarn
RUN yarn install

# Copy source code
COPY src ./src
COPY public /public
COPY ./views /views
COPY tailwind.config.js ./tailwind.config.js
COPY tsconfig.json ./tsconfig.json

# Build dist folder
RUN yarn build

# Start production image build
FROM gcr.io/distroless/nodejs18-debian11

# Copy node modules and build directory
COPY --from=base ./node_modules ./node_modules
COPY --from=base /dist /dist


CMD ["dist/index.js"]