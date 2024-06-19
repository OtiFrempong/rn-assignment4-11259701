import React from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, Image } from 'react-native';
import JobCard from './JobCard';

const featuredJobs = [
  { id: '1', title: 'Software Engineer', company: 'Facebook', location: 'Accra, Ghana', salary: '$180,000' },
  { id: '2', title: 'Product Manager', company: 'Google', location: 'New York, USA', salary: '$160,000' },
  // Add more jobs as needed
];

const popularJobs = [
  { id: '1', title: 'Jr Executive', company: 'Burger King', location: 'Los Angeles, USA', salary: '$98,000' },
  { id: '2', title: 'Product Manager', company: 'Beats', location: 'Florida, USA', salary: '$84,000' },
  // Add more jobs as needed
];

const Home = ({ route }) => {
  const { name, email } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.profileContainer}>
        <Image style={styles.profileImage} source={{ uri: 'https://www.figma.com/design/CGpaaLigc1W8ij1mLJMvev/Assignment-4?node-id=1-821&t=ikMIlfNIn9dhkaCa-4' }} />
        <View>
          <Text style={styles.profileName}>Oti Frempong</Text>
          <Text style={styles.profileEmail}>serwaa@gmail.com</Text>
        </View>
      </View>
      <TextInput style={styles.searchInput} placeholder="Search a job or position" />
      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <FlatList
        data={featuredJobs}
        renderItem={({ item }) => <JobCard job={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      
      <FlatList
        data={featuredJobs}
        renderItem={({ item }) => <JobCard job={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <FlatList
        data={featuredJobs}
        renderItem={({ item }) => <JobCard job={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <FlatList
        data={featuredJobs}
        renderItem={({ item }) => <JobCard job={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      
      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      <FlatList
        data={popularJobs}
        renderItem={({ item }) => <JobCard job={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        data={popularJobs}
        renderItem={({ item }) => <JobCard job={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      <FlatList
        data={popularJobs}
        renderItem={({ item }) => <JobCard job={item} />}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 20,
    height: 10,
    borderRadius: 25,
    marginRight: 15,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  profileEmail: {
    fontSize: 14,
    color: '#666',
  },
  searchInput: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default Home;
