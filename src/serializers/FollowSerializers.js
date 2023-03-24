import Serializers from './Serializers.js';

class FollowSerializers extends Serializers {
  type() {
    return this.resource.type;
  }

  id() {
    return this.resource.id;
  }

  attributes() {
    return {
      ...this.resource.attributes,
    };
  }

  link() {
    return this.resource.link;
  }
}
export default FollowSerializers;
