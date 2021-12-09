const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('FormatFullName', () => {

  it('should return an error if "fullName" arg is not a string', () => {
    expect(formatFullname(undefined)).to.equal('Error');
    expect(formatFullname(15)).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });

  it('should return an error if "fullName" arg is empty ', () => {
    expect(formatFullname('')).to.equal('Error');
  });

  it('should return right format of <firstName> and <lastName> ', () => {
    expect(formatFullname('amanda doe')).to.equal('Amanda Doe');
    expect(formatFullname('AMANDA DOE')).to.equal('Amanda Doe');
    expect(formatFullname('AmaNda DOe')).to.equal('Amanda Doe');
});

it('should return an error if "fullName" arg is >2 strings or <2 strings or without space ', () => {
    expect(formatFullname('John Doe test')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
    expect(formatFullname('JohnDoe')).to.equal('Error');
}); 

});