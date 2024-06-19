import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const JobCard = ({ job }) => (
  <View style={styles.card}>
    <Text>{job.title}</Text>
    <Text>{job.company}</Text>
    <Text>{job.salary}</Text>
  </View>
);

export default function Home({ route }) {
  const { name, email } = route.params;
  const featuredJobs = [
    { title: 'Software Engineer', company: 'Facebook', salary: '$180,000' },
    // ...other jobs
  ];
  const popularJobs = [
    { title: 'Jr Executive', company: 'Burger King', salary: '$98,000' },
    // ...other jobs
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome, {name}</Text>
      <Text>{email}</Text>
      <Text style={styles.subHeader}>Featured Jobs</Text>
      <FlatList 
        data={featuredJobs} 
        renderItem={({ item }) => <JobCard job={item} />} 
        keyExtractor={item => item.title} 
      />
      <Text style={styles.subHeader}>Popular Jobs</Text>
      <FlatList 
        data={popularJobs} 
        renderItem={({ item }) => <JobCard job={item} />} 
        keyExtractor={item => item.title} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    marginBottom: 10,
  },
  subHeader: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});
