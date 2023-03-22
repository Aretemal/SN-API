class Serializer {
  serialize(data, id, type, links) {
    return {
      data: {
        type,
        id,
        attributes: {
          ...data,
        },
      },
      links: {
        self: links,
      },
    };
  }
}
export default Serializer;