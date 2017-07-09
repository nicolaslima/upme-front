import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({

  createTraining(userId, trainingData) {
    return this.ajax(this.urlForCreateUser( userId ), 'POST', {
      data: trainingData
    });
  },

  urlForCreateUser(userId) {
    return this.buildURL() + `/users/${ userId }/vo2max_trainings`;
  },

  results(userId) {
    return this.ajax(this.urlForResults(userId), 'GET');
  },

  urlForResults(userId) {
    return this.buildURL() + `/users/${ userId }/results`;
  }

});