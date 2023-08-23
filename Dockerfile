FROM node:18 AS build

WORKDIR /build

COPY . .

RUN yarn install
RUN yarn build

FROM node:18-alpine AS final

RUN mkdir dist

COPY --from=build ./build/dist ./dist

RUN npm i -g serve

EXPOSE 5000

CMD ["serve", "-s", "dist"]







